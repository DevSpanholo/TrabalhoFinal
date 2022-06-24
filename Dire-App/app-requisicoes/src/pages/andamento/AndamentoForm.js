import React from "react";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";

const AndamentoForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAndamento({ ...props.andamento, [id]: value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha.
    //console.log("S: "+senha+" CS: "+contraSenha);

    props.salvar();
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form">
              <div class="form-toggle"></div>
              <div class="form-panel one">
                <div class="form-header">
                  <h5>Cadastro de Andamentos</h5>

                  <div class="form-group">
                        <label>Data e Hora Criada</label 
                        >
                        <input
                          class="form-control"
                          type="datetime-local"
                          id="dataHora"
                          value={props.andamento.dataHora}
                          {...register("dataHora", { 
                            required: {value:true, message:"A data Hora é obrigatória."}
                          })}
                          onChange={handleInputChange}
                          
                        />
                        {errors.dataHora && <span style={{color:'red'}}>{errors.dataHora.message}</span>} 
                        
                      </div>


                    <div className="p-fluid grid formgrid">
                      <div className="field col-12 md:col-4">
                        <label htmlFor="titulo">Título</label>
                        <InputText
                          id="titulo"
                          defaultValue={props.andamento.titulo}
                          {...register("titulo", {
                            required: {
                              value: true,
                              message: "O título é obrigatório.",
                            },
                            minLength: {
                              value: 5,
                              message:
                                "O título deve ter pelo menos 5 caracteres.",
                            },
                            maxLength: {
                              value: 70,
                              message:
                                "O título deve ter no máximo 70 caracteres.",
                            },
                          })}
                          onChange={handleInputChange}
                        />
                        {errors.titulo && (
                          <span style={{ color: "red" }}>
                            {errors.titulo.message}
                          </span>
                        )}
                      </div>

                      <div className="field col-12 md:col-4">
                        <label htmlFor="descricao">Descrição</label>
                        <InputText
                          id="descricao"
                          defaultValue={props.andamento.descricao}
                          {...register("descricao", {
                            required: {
                              value: true,
                              message: "A descrição é obrigatória.",
                            },
                            minLength: {
                              value: 5,
                              message:
                                "A descrição deve ter pelo menos 5 caracteres.",
                            },
                            maxLength: {
                              value: 150,
                              message:
                                "A descrição deve ter no máximo 150 caracteres.",
                            },
                          })}
                          onChange={handleInputChange}
                        />
                        {errors.descricao && (
                          <span style={{ color: "red" }}>
                            {errors.descricao.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                 
                  <br />
                  <div class="form-group">
                    <Button
                      label="Salvar"
                      icon="pi pi-save"
                      type="submit"
                      className="p-button-secondary p-button-text"
                    />
                    <Button
                      label="Cancelar"
                      icon="pi pi-times-circle"
                      onClick={props.cancelar}
                      className="p-button-secondary p-button-text"
                    />
                  </div>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AndamentoForm;
