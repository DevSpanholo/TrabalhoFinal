import React from "react";
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { useForm } from "react-hook-form";
import { Button } from 'primereact/button';

const AtividadeForm = (props) => {
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAtividade({ ...props.atividade, [id]: value });
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
                    <h5>Cadastro de Atividades</h5>
                    <div className="p-fluid grid formgrid">
                          <div className="field col-12 md:col-4">
                              <label htmlFor="titulo">Título</label>
                              <InputText id="titulo" defaultValue={props.atividade.titulo}
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
                            <InputText id="descricao" defaultValue={props.atividade.descricao}
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
                        <label>Agenda de Início</label 
                        >
                        <input
                          class="form-control"
                          type="datetime-local"
                          id="angendaInicio"
                          value={props.atividade.angendaInicio}
                          {...register("angendaInicio", { 
                            required: {value:true, message:"A Agenda de Início é obrigatória."}
                          })}
                          onChange={handleInputChange}
                          
                        />
                        {errors.angendaInicio && <span style={{color:'red'}}>{errors.angendaInicio.message}</span>} 
                        
                      </div>

                      <div class="form-group">
                        <label>Data e Hora Término</label 
                        >
                        <input
                          class="form-control"
                          type="datetime-local"
                          id="dataHoraTermino"
                          value={props.atividade.dataHoraTermino}
                          {...register("dataHoraTermino", { 
                            required: {value:true, message:"A data Hora Término é obrigatória."}
                          })}
                          onChange={handleInputChange}
                          
                        />
                        {errors.dataHoraTermino && <span style={{color:'red'}}>{errors.dataHoraTermino.message}</span>} 
                        
                      </div>

                      <div class="form-group">
                        <label>Prazo </label>
                        <input
                          class="form-control"
                          type="date"
                          id="prazo"
                          value={props.atividade.prazo}
                          {...register("prazoAtendimento", { 
                            required: {value:true, message:"O Prazo é obrigatório."}
                          })}
                          onChange={handleInputChange}
                        />
                        {errors.prazo && <span style={{color:'red'}}>{errors.prazo.message}</span>} 
                      </div>

                      <div class="form-group">
                        <label>Status</label><br />
                        <RadioButton inputId="nova" value="Nova" id="status" onChange={handleInputChange} checked={props.atividade.status === 'Nova'} />
                        <label htmlFor="nova">Nova</label><br />
                        
                        <RadioButton inputId="finalizada" value="Finalizada" id="status" onChange={handleInputChange} checked={props.atividade.status === 'Finalizada'} />
                        <label htmlFor="finalizada">Finalizada</label><br />
                        
                        <RadioButton inputId="cancelada" value="Cancelada" id="status" onChange={handleInputChange} checked={props.atividade.status === 'Cancelada'} />
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
export default AtividadeForm;
