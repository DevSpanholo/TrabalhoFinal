import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

function Menu() {
  let navigate = useNavigate();
  const items = [
      {
          label: 'Home', icon: 'pi pi-fw pi-home',
          command: () => { navigate("/") }
      },
      {
          label: 'Cadastros', icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'Atividade', icon: 'pi pi-fw pi-user',
                  command: () => { navigate("/atividade") }
              },
              {
                label: 'Andamento', icon: 'pi pi-fw pi-user',
                command: () => { navigate("/andamento") }
              },
              {
                  label: 'Colaboradores', icon: 'pi pi-fw pi-user',
                  command: () => { navigate("/colaborador") }
              },
              
              {
                  label: 'Solicitante', icon: 'pi pi-fw pi-user',
                  command: () => { navigate("/solicitante") }
              },
              {
                  label: 'Requisicao', icon: 'pi pi-fw pi-user',
                  command: () => { navigate("/requisicao") }
              },
              {
                  label: 'TipoRequisicao', icon: 'pi pi-fw pi-user',
                  command: () => { navigate("/tipoRequisicao") }
              }
          ]
      },
    {
      label: 'Sair', icon: 'pi pi-sign-out',
      command: () => {
        sessionStorage.setItem('token', '');
      },
      url: '/'
    },
  ];

  return (<Menubar model={items} />)
}

export default Menu;