import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Moment from 'moment';

const AtividadeList = (props) => {

  const operacoesBodyTemplate = (rowData) => {
    return (
      <div>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-text" aria-label="Excluir" onClick={() => props.excluir(rowData._id)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-text" aria-label="Editar" onClick={() => props.editar(rowData._id)}/>
      </div>
    )

  }

  const formataDateTermino = (obj) => {
    console.log(obj)
    return  Moment(obj.dataHoraTermino).format("DD/MM/YYYY HH:MM");
  }
  const formataAngendaInicio = (obj) => {
    console.log(obj)
    return  Moment(obj.angendaInicio).format("DD/MM/YYYY HH:MM");
  }

  const header = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button icon="pi pi-file-o" label="Inserir" className="p-button-sm" onClick={() => props.inserir()} />
    </div>
  );

  const footer = `Total de itens: ${props.andamentos ? props.andamentos.length : 0}`;

  return (
    <div className="App">
      <h4 className='name-andamentos'>Listagem de Atividades</h4>
     
      <DataTable value={props.andamentos} paginator responsiveLayout="scroll" header={header} footer={footer}
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhuma ativade encontrada."

        selectionMode="single" selection={props.andamento} 
        onSelectionChange={e => props.setandamento(e.value)} dataKey="_id">

        <Column field="_id" header="ID" sortable></Column>
        <Column field="titulo" header="Título" sortable filter></Column>
        <Column field="descricao" header="Descrição" sortable filter></Column>
        <Column field="status" header="Status" sortable filter></Column>
        <Column field="prazo" body={
          (obj) => {
            console.log(obj)
            return  Moment(obj.prazo).format("DD/MM/YYYY");
          }
        } header="Prazo" sortable filter></Column>
        <Column field="angendaInicio" body={formataAngendaInicio} header="Agenda de início" sortable filter></Column>
        <Column field="dataHoraTermino" body={formataDateTermino} header="Data e Hora de Término" sortable filter></Column>
        <Column field="status" header="Status" sortable filter></Column>
        
        <Column header="Operações" body={operacoesBodyTemplate}>
        </Column>
      </DataTable>
    </div>
  );
};
export default AtividadeList;
