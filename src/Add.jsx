import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
  
  const submitHandler = (e) => {
    e.preventDefault();
    alert('mande mande');
  }

  return (
    <form className="addGrid" onSubmit={submitHandler}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum ullam, aspernatur autem itaque cum nihil quae veritatis obcaecati possimus dolorum distinctio sed laborum adipisci beatae in soluta aut quasi?
      Esse dolore laudantium eum, cum at in repudiandae. Laboriosam beatae rem perferendis, repellat in aliquam repudiandae hic est mollitia enim fuga, asperiores vero ea nostrum? Eius recusandae in sunt aut.
      Atque amet minus voluptatem sed ducimus numquam ad, cumque reiciendis praesentium autem voluptas et. Sit doloremque nulla quibusdam, cumque qui, ipsum aliquam ipsam sint assumenda nesciunt quis in aspernatur omnis.</p>

      <div className="addButtons">
        <button className='principalButtom'><Link to='/'>Regresar</Link></button>
        <button className='principalButtom' type='submit'>Aceptar</button>
      </div>
    </form>
  )
}

export default Add