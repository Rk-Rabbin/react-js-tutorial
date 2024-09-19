export const LearnMap = () => {
    const items = ['Item1', 'Item2', 'Item3', 'Item4']
  return (
    <>
      <ul>
        {
            items.map((item, i)=>(
                <li key={i}>
                    {i} ----------- {item}
                </li>
            ))
        }
      </ul>
    </>
  )
}
