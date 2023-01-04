import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Row } from 'react-bootstrap'

const Category = ({filteredCategory , allCategory}) => {
const onFilter =(cat)=>{
  filteredCategory(cat)
}
  return (
    <Row>

<div className='cat-btns text-center d-flex justify-content-center'>
{
allCategory.length?(
  allCategory.map((item , index)=>{return(
    <button key={index}   onClick={()=>onFilter(item)}   className="btn mx-2">{item}</button>
  )})
):(<h2>لاتوجد اصناف جديدة</h2>)
}

</div>

     </Row>

  )
}

export default Category
