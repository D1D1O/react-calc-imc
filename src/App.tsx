import { useState } from 'react';
import styles from './App.module.css';
import powerImage from './assets/powered.png';
import Swal from 'sweetalert2';

const App =() =>{

  const [heightFiel, setHeightField] = useState<number >(0);
  const [weightFiel, setWeightField] = useState<number >(0);

  const handleCalculateButton = () =>{
    if (heightFiel && weightFiel){
      

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Não foi possícel calular seu IMC, informe todos os campos !'
      })
    }
  }




  return (
    <div className={styles.main} >
      <header>
          <div className={styles.headerContainer} >
            <img src={powerImage} alt='' width={150} ></img>
          </div>
      </header>
      <div className={styles.container} >
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p> IMC é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura. Também conhecido como Índice de Massa Corporal, o IMC é uma fórmula utilizada por vários profissionais de saúde, incluindo médicos, enfermeiros e nutricionistas, para saber, de uma forma rápida, se a pessoa precisa ganhar ou perder peso.</p>
        
          <input 
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em metros) '
            value={heightFiel > 0 ? heightFiel : ''}
            onChange={(e)=>setHeightField(parseFloat(e.target.value)) }

          />

          <input 
            type="number"
            placeholder='Digite o seu peso. Ex: 79.5 (em Kg) '
            value={weightFiel > 0 ? weightFiel : ''}
            onChange={(e)=>setWeightField(parseFloat(e.target.value)) }

          />
          <button
            onClick={handleCalculateButton}
          >
            Calcular
          </button>



        </div>
        <div className={styles.rightSide}>
          R
        </div>
      </div>

    </div>
  )
}

export default App;