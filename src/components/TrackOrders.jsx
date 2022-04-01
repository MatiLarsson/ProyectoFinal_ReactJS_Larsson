/* import { useState } from "react"
import { Button } from "./styled-components/Button"
import { getOrderById, getCurrentDate } from "../resources/Firebase"

const TrackOrders = () => {

  const [orderId, setOrderId] = useState()
  const [orderDate, setOrderDate] = useState()
  const [elapsedSeconds, setElapsedSeconds] = useState()
  const [orderStatus, setOrderStatus] = useState()

  const handleOrderQuery = () => {

    getOrderById(orderId)
    .then(res => setOrderDate(res.date))
    .catch(() => setOrderStatus("No se encontró la orden, si tu compra fué muy reciente, aguarda unos minutos y vuelve a intentarlo."))

    getCurrentDate()
    .then(res => {
      setElapsedSeconds(res - orderDate)
    })

    console.log(elapsedSeconds)
    console.log(typeof elapsedSeconds)

    const ONE_DAY_IN_SECONDS = 86400
    const TWO_DAYS_IN_SECONDS = ONE_DAY_IN_SECONDS * 2
    const THREE_DAYS_IN_SECONDS = ONE_DAY_IN_SECONDS * 3


    if (elapsedSeconds < ONE_DAY_IN_SECONDS) {
      setOrderStatus('¡Acabas de comprar hace menos de un día!, !No esperes un milagro! Ten paciencia por favor.')
    } else if (elapsedSeconds > ONE_DAY_IN_SECONDS && elapsedSeconds < TWO_DAYS_IN_SECONDS) {
      setOrderStatus('Tu órden está en camino, ¡espera un poco!')
    } else if (elapsedSeconds > TWO_DAYS_IN_SECONDS && elapsedSeconds < THREE_DAYS_IN_SECONDS) {
      setOrderStatus('Tu órden llega hoy, ¡Estate atento!')
    } else if (elapsedSeconds > THREE_DAYS_IN_SECONDS) {
      setOrderStatus('Tu órden ha sido entregada, ¡Gracias por tu compra!')
    }
  }


  return (
    <div className="mainContainer">
      {
        orderStatus
        ? <>
            <h2 className="greeting">Estado de la compra ID <strong>{ orderId }</strong></h2>
            <p className="orderInfo">{ orderStatus }</p>
            <Button primary onClick={() => setOrderStatus()}>Trackear otra órden</Button>
          </>
        : <>
            <h2 className="greeting">Introduce tu id de orden para realizar su seguimiento</h2>
            <form className="formContainer">
              <div className="formGroup">
                <label htmlFor="id">ID</label>
                <input type="text" onChange={ (e) => setOrderId(e.target.value) }/>
                <Button primary type="submit" onClick={(e) => {
                    e.preventDefault()
                    handleOrderQuery()
                  }
                }>
                  Buscar orden
                </Button>
                <Button primary onClick={() => setOrderStatus()}>Trackear otra órden</Button>
              </div>
            </form>
          </>
      }
    </div>
  )
}

export default TrackOrders */