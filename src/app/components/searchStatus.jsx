const searchStatus = ({ number }) => {
  let str = ''
  const ostatok = number % 10

  if (number === 0) return <h3>Никто с тобой не тусанет</h3>

  if (ostatok > 1 && ostatok < 5) {
    if ((number > 1 && number < 5) || number > 20) {
      str = 'а'
    }
  }

  return (
    <h1>
      {number} человек{str} тусанет с тобой сегодня
    </h1>
  )
}

export default searchStatus
