import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';



const TipoRequisicaoList = (props) => {

  const operacoesBodyTemplate = (rowData) => {
    return (
      <>
        
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-text" aria-label="Editar" onClick={() => props.editar()} disabled={!props.tipoRequisicao._id}/>
        <Button icon="pi pi-trash"  className="p-button-rounded p-button-text" aria-label="Excluir" onClick={() => props.excluir()} disabled={!props.tipoRequisicao._id} />
        
      </>            
    )
  }

  const header = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button icon="pi pi-file-o" label="Inserir" className="p-button-sm" onClick={() => props.inserir()} />
    </div>
  );

  const footer = `Total de itens: ${props.tipoRequisicoes ? props.tipoRequisicoes.length : 0}`;

  return (
    <div className="App">
      <h4 className='name-tipoRequisicoes'>Listagem deTipo Requisições</h4>

      <p></p>
      <div>


      </div>
      <p></p>

      <DataTable value={props.tipoRequisicoes} paginator responsiveLayout="scroll" header={header} footer={footer}
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 50]}
        emptyMessage="Nenhum Tipo Requisição encontrado."
        selectionMode="single" selection={props.tipoRequisicao}
        onSelectionChange={e => props.setTipoRequisicao(e.value)} dataKey="_id"
      >
        <Column field="_id" header="ID" sortable></Column>
        <Column field="descricao" header="Descrição" sortable filter ></Column>
        <Column header="Operações" body={operacoesBodyTemplate}></Column>
      </DataTable>



    </div>
  );
};
export default TipoRequisicaoList;