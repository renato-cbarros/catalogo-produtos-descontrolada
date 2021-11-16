import { GetAllProducts } from 'src/app/core/services/product/models/getAllProducts';

export const MOCK_LIST_PRODUCTS: GetAllProducts = {
  produtos: [
    {
      id: '013619f2-e316-4a41-ae82-2cb761a2cafc',
      emailDaLoja: 'renato.barros_test_descontrolada@email.com',
      nome: 'produto 20',
      precoDeVenda: 20,
      descricao: 'produto 20',
      quantidade: 20,
      tipo: 2,
      dataDeValidade: '2021-11-20T06:10:00',
    },
    {
      id: 'b4c4a73d-c79e-4904-b3c2-9029d76962af',
      emailDaLoja: 'renato.barros_test_descontrolada@email.com',
      nome: 'produto 23',
      precoDeVenda: 12.22,
      descricao: 'produto 23',
      quantidade: 12,
      tipo: 2,
      dataDeValidade: '2021-11-22T04:26:00',
    },
    {
      id: '3b043c4b-ca8e-4729-b4da-059add7bc75c',
      emailDaLoja: 'renato.barros_test_descontrolada@email.com',
      nome: 'produto 21',
      precoDeVenda: 150,
      descricao: 'produto 21 teste',
      quantidade: 12,
      tipo: 2,
      dataDeValidade: '2021-11-30T04:19:00',
    },
    {
      id: 'b23407f6-66c1-4ba1-a1ac-c960f20e65ea',
      emailDaLoja: 'renato.barros_test_descontrolada@email.com',
      nome: 'porduto 18',
      precoDeVenda: 18,
      descricao: 'porduto 18',
      quantidade: 23,
      tipo: 2,
      dataDeValidade: '2021-12-06T04:07:00',
    },
    {
      id: '86c72a39-b804-47bd-a2b0-92ae92e48142',
      emailDaLoja: 'renato.barros_test_descontrolada@email.com',
      nome: 'produto 16',
      precoDeVenda: 34,
      descricao: 'produto 16',
      quantidade: 123,
      tipo: 2,
      dataDeValidade: '2021-11-24T04:05:00',
    },
  ],
  totalDeProdutos: 17,
};