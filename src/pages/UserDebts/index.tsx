/* eslint-disable @typescript-eslint/ban-types */
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Link, RouteProps, useParams } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { HiPlus } from 'react-icons/hi';
import useUserData from '../../hooks/useUserData';
import {
  Container,
  Item,
  List,
  ListHeader,
  ListHeaderWrapper,
  ListHeaderControls,
  ItemTable,
  TableWrapper,
} from './styles';
import PaymentImage from '../../assets/onlineShopping.svg';
import Input from '../../components/Input';
import debtsApi from '../../services/debtsApi';
import CurrencyFormatter from '../../services/currencyFromatter';
import PageHeader from '../../components/PageHeader';
import useToast from '../../hooks/useToast';
import Loader from '../../components/Loader';

type DebtFormData = {
  _id: string;
  idUsuario: number;
  motivo: string;
  valor: number;
  formattedValue: string;
};

interface RouteParams {
  id: string;
}

const UserDebts: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { activeUser } = useUserData();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [debts, setDebts] = useState<DebtFormData[]>([]);
  const [userDebts, setUserDebts] = useState<DebtFormData[]>([]);

  useEffect(() => {
    const getDebts = async () => {
      try {
        const { data } = await debtsApi.get(
          '/divida?uuid=c257705e-c8ee-4f2c-8a8c-d4270b740760',
        );

        const formattedData = data.result.map((item: DebtFormData) => ({
          ...item,
          formattedValue: CurrencyFormatter(item.valor),
        }));
        setDebts(formattedData);
        setLoading(false);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Problema!',
          description: 'Não foi possível encontrar lista de débitos',
        });
        setLoading(false);
      }
    };

    getDebts();
  }, [addToast]);

  useEffect(() => {
    const filteredList = debts.filter(debt => debt.idUsuario === Number(id));
    setUserDebts(filteredList);
  }, [id, debts]);

  const handleNavigateToDebtDetails = useCallback(
    (location: RouteProps['location'], data) => ({
      ...location,
      pathname: `/details/${id}`,
      state: {
        ...data,
      },
    }),
    [id],
  );

  const handleUpdateQuery = useCallback((e: FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  }, []);

  const handleSearch = useCallback(
    (data: DebtFormData[]) => {
      return data.filter(
        debt =>
          debt.formattedValue
            .toLocaleLowerCase()
            .indexOf(query.toLowerCase()) >= 0 ||
          debt.motivo.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
          debt.formattedValue
            .toLocaleLowerCase()
            .indexOf(query.toLowerCase()) >= 0,
      );
    },
    [query],
  );

  return (
    <Container>
      <PageHeader
        title="Listagem de dívidas"
        subtitle={activeUser.name}
        image={PaymentImage}
      />

      <List>
        <ListHeaderWrapper>
          <ListHeader>
            Dívidias presentes <span>{userDebts.length}</span>
          </ListHeader>

          <ListHeaderControls>
            <div>
              <Input
                name="field"
                type="text"
                placeholder="Busque por qualquer campo"
                onChange={handleUpdateQuery}
              />
            </div>
            <Link
              to={(location: RouteProps['location']) => ({
                ...location,
                pathname: `/new/${id}`,
                state: { idUsuario: id },
              })}
            >
              <HiPlus size={20} color="#fff" />
              cadastrar nova
            </Link>
          </ListHeaderControls>
        </ListHeaderWrapper>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader size={80} />
          </div>
        ) : (
          <TableWrapper>
            <ItemTable>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {handleSearch(userDebts).map((debt: DebtFormData) => (
                  <Item key={debt._id}>
                    <td>{debt.motivo}</td>
                    <td>{debt.formattedValue}</td>
                    <td>
                      <Link
                        to={(location: RouteProps['location']) =>
                          handleNavigateToDebtDetails(location, {
                            _id: debt._id,
                            idUsuario: id,
                            motivo: debt.motivo,
                            valor: debt.valor,
                          })
                        }
                      >
                        <AiOutlineEye size={20} color="#7a7a7a" />
                      </Link>
                    </td>
                  </Item>
                ))}
              </tbody>
            </ItemTable>
          </TableWrapper>
        )}
      </List>
    </Container>
  );
};

export default UserDebts;
