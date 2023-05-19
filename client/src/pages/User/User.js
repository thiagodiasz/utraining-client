import React, { useState } from 'react';
import './User.scss';
import Input from '../../components/Input/Input';


const Organizador = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     // e.preventDefault();
//     if (email && email.endsWith('@udf.edu.br')) {
//       try {
//         const response = await ApiService.postAuthMail(email);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       console.error('Invalid email address');
//     }
//   };

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };


  return (
    <section id="user" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h5>User</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="mt-4">
                      <Input type="input-text" placeholder="Digite o e-mail para cadastro" />
                      <button >
                        Request Auth Mail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Organizador;