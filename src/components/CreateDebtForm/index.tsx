import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useToast from '../../hooks/useToast';
import useUserData from '../../hooks/useUserData';
import debtsApi from '../../services/debtsApi';
import Button from '../Button';
import Input from '../Input';
import Loader from '../Loader';
import Select from '../Select';
import {
  ButtonsControlGroup,
  Container,
  FormControlGroup,
  FormTitle,
} from './styles';

type DebtFormData = {
  _id: string;
  idUsuario: number;
  motivo: string;
  valor: number;
};

interface DebtFormProps {
  method: 'post' | 'put';
}

const DebtFormSchema = yup.object().shape({
  idUsuario: yup.number().required('campo obrigatório'),
  motivo: yup.string().required('campo obrigatório'),
  valor: yup
    .number()
    .required('campo obrigatório')
    .typeError(
      'Para a simplicidade deste exemplo, separe os números por "." ponto',
    ),
});

const DebtForm: React.FC<DebtFormProps> = ({ method }) => {
  const history = useHistory();
  const { addToast } = useToast();
  const { users } = useUserData();
  const [loading, setLoading] = useState<boolean>(false);
  const { _id, idUsuario, motivo, valor } = useLocation<DebtFormData>().state;
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(DebtFormSchema),
  });
  const { errors } = formState;

  const handleDeleteDebt = useCallback(async () => {
    setLoading(true);
    try {
      await debtsApi.delete(
        `/divida/${_id}?uuid=c257705e-c8ee-4f2c-8a8c-d4270b740760`,
      );
      addToast({
        type: 'success',
        title: 'Sucesso!',
        description: 'Débito deletado com sucesso',
      });
      setLoading(false);
      history.push(`/user/${idUsuario}`);
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Problema!',
        description: 'Não foi possível deletar o débito',
      });
      setLoading(false);
    }
  }, [_id, addToast, history, idUsuario]);

  const onSubmit: SubmitHandler<DebtFormData> = async data => {
    setLoading(true);

    if (method === 'post') {
      try {
        await debtsApi.post(
          '/divida?uuid=c257705e-c8ee-4f2c-8a8c-d4270b740760',
          {
            ...data,
          },
        );
        addToast({
          type: 'success',
          title: 'Sucesso!',
          description: 'Débito cadastrado!',
        });
        setLoading(false);
        history.push(`/user/${idUsuario}`);
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Problema!',
          description: 'Não foi possível cadastrar débito',
        });
        setLoading(false);
      }
    } else if (method === 'put') {
      try {
        await debtsApi.put(
          `/divida/${_id}?uuid=c257705e-c8ee-4f2c-8a8c-d4270b740760`,
          {
            ...data,
          },
        );
        addToast({
          type: 'success',
          title: 'Sucesso!',
          description: 'Os dados foram atualizados',
        });
        setLoading(false);
        history.push(`/user/${idUsuario}`);
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Problema!',
          description: 'Não foi possível atualizar dados',
        });
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControlGroup>
          <FormTitle>Usuário</FormTitle>
          <Select
            defaultValue={idUsuario ?? idUsuario}
            {...register('idUsuario')}
            error={errors.idUsuario}
          >
            {users.map(user => (
              <option value={user.id} key={user.name}>
                {user.name}
              </option>
            ))}
          </Select>
        </FormControlGroup>

        <FormControlGroup>
          <FormTitle>Motivo</FormTitle>
          <Input
            defaultValue={motivo ?? motivo}
            {...register('motivo')}
            error={errors.motivo}
          />
        </FormControlGroup>

        <FormControlGroup>
          <FormTitle>Valor</FormTitle>
          <Input
            defaultValue={valor ?? valor}
            {...register('valor')}
            error={errors.valor}
            type="text"
          />
        </FormControlGroup>

        <ButtonsControlGroup loading={loading.toString()} method={method}>
          <Button
            color="#f44336"
            type="button"
            onClick={() => handleDeleteDebt()}
          >
            Deletar
          </Button>
          <Button color="#e7b057" type="submit">
            {loading ? <Loader size={16} color="#fff" /> : 'Enviar'}
          </Button>
        </ButtonsControlGroup>
      </form>
    </Container>
  );
};

export default DebtForm;
