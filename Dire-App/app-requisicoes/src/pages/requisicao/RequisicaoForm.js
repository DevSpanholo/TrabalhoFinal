import React from "react";
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { useForm } from "react-hook-form";
import { Button } from 'primereact/button';

const RequisicaoForm = (props) => {
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [id]: value });
  };


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha. 
    //console.log("S: "+senha+" CS: "+contraSenha);
   
      props.salvar(); 
    
  }


  return (
      <div class="container">
            <div class="row">
              <div class="col">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form">
                <div class="form-toggle"></div>
                <div class="form-panel one">
    
                <div class="form-header">
                    <h5>Cadastro de Requisições</h5>
                    <div className="p-fluid grid formgrid">
                          <div className="field col-12 md:col-4">
                              <label htmlFor="titulo">Título</label>
                              <InputText id="titulo" defaultValue={props.requisicao.titulo}
                                {...register("titulo", { 
                                  required: {value:true, message:"O título é obrigatório."}, 
                                  minLength: {value:5, message:"O título deve ter pelo menos 5 caracteres."}, 
                                  maxLength: {value:70, message:"O título deve ter no máximo 70 caracteres."}                                   
                                })}
                                onChange={handleInputChange} />
                              {errors.titulo && <span style={{color:'red'}}>{errors.titulo.message}</span>}  
                          </div>

                            <div className="field col-12 md:col-4">
                            <label htmlFor="descricao">Descrição</label>
                            <InputText id="descricao" defaultValue={props.requisicao.descricao}
                              {...register("descricao", { 
                                required: {value:true, message:"A descrição é obrigatória."}, 
                                minLength: {value:5, message:"A descrição deve ter pelo menos 5 caracteres."}, 
                                maxLength: {value:150, message:"A descrição deve ter no máximo 150 caracteres."} 
                              })}
                              onChange={handleInputChange} />
                            {errors.descricao && <span style={{color:'red'}}>{errors.descricao.message}</span>}  
                          </div>

                          </div>



                      <div class="form-group">
                        <label>Data e Hora Criada</label 
                        >
                        <input
                          class="form-control"
                          type="datetime-local"
                          id="dataHoraCriada"
                          value={props.requisicao.dataHoraCriada}
                          {...register("dataHoraCriada", { 
                            required: {value:true, message:"A data Hora Criada é obrigatória."}
                          })}
                          onChange={handleInputChange}
                          
                        />
                        {errors.dataHoraCriada && <span style={{color:'red'}}>{errors.dataHoraCriada.message}</span>} 
                        
                      </div>
                      <div class="form-group">
                        <label>Prazo de Atendimento</label>
                        <input
                          class="form-control"
                          type="date"
                          id="prazoAtendimento"
                          value={props.requisicao.prazoAtendimento}
                          {...register("prazoAtendimento", { 
                            required: {value:true, message:"O Prazo de Atendimento é obrigatório."}
                          })}
                          onChange={handleInputChange}
                        />
                        {errors.prazoAtendimento && <span style={{color:'red'}}>{errors.prazoAtendimento.message}</span>} 
                      </div>
                      <div class="form-group">
                        <label>Status</label><br />
                        <RadioButton inputId="nova" value="Nova" id="status" onChange={handleInputChange} checked={props.requisicao.status === 'Nova'} />
                        <label htmlFor="nova">Nova</label><br />
                        
                        <RadioButton inputId="finalizada" value="Finalizada" id="status" onChange={handleInputChange} checked={props.requisicao.status === 'Finalizada'} />
                        <label htmlFor="finalizada">Finalizada</label><br />
                        
                        <RadioButton inputId="cancelada" value="Cancelada" id="status" onChange={handleInputChange} checked={props.requisicao.status === 'Cancelada'} />
                        <label htmlFor="cancelada">Cancelada</label><br />
                       
                          
                      </div><br />
                      <div class="form-group">                       
                          <Button label="Salvar" icon="pi pi-save" type="submit"  
                        className="p-button-secondary p-button-text" />
                          <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar} 
                                  className="p-button-secondary p-button-text" />
                      </div>
                    
                  </div>
                </div>
                </div>
                
         </form>
         </div>
         </div>
         </div>
         


  );
};
export default RequisicaoForm;
