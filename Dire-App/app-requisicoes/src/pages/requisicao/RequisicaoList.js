import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Moment from 'moment';

const RequisicaoList = (props) => {

  const operacoesBodyTemplate = (rowData) => {
    return (
      <div>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-text" aria-label="Excluir" onClick={() => props.excluir(rowData._id)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-text" aria-label="Editar" onClick={() => props.editar(rowData._id)}/>
      </div>
    )

  }

  const formataDate = (obj) => {
    console.log(obj)
    return  Moment(obj.dataHoraCriada).format("DD/MM/YYYY HH:MM");
  }

  const header = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button icon="pi pi-file-o" label="Inserir" className="p-button-sm" onClick={() => props.inserir()} />
    </div>
  );

  const footer = `Total de itens: ${props.requisicoes ? props.requisicoes.length : 0}`;

  return (
    <div className="App">
      <h4 className='name-requisicoes'>Listagem de Requisições</h4>
     
      <DataTable value={props.requisicoes} paginator responsiveLayout="scroll" header={header} footer={footer}
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhuma requisição encontrada."

        selectionMode="single" selection={props.requisicao} 
        onSelectionChange={e => props.setRequisicao(e.value)} dataKey="_id">

        <Column field="_id" header="ID" sortable></Column>
        <Column field="titulo" header="Título" sortable filter></Column>
        <Column field="descricao" header="Descrição" sortable filter></Column>
        <Column field="dataHoraCriada" body={formataDate} header="Data e Hora Criada" sortable filter></Column>
        <Column field="status" header="Status" sortable filter></Column>
        <Column field="prazoAtendimento" body={
          (obj) => {
            console.log(obj)
            return  Moment(obj.prazoAtendimento).format("DD/MM/YYYY");
          }
        } header="Prazo de Atendimento" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}>
        </Column>
      </DataTable>
    </div>
  );
};
export default RequisicaoList;
