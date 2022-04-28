import React from "react";
import { useState } from "react";
import IconSwitch from "./IconSwitch";
import products from './mock/products';
import ListView from './ListView';
import CardView from './CardView';

function Store () {
  const [icon, setIcon] = useState('view_list');

  const onIconSwitch = () => {
    setIcon((prevValue) => ((prevValue)==='view_list' ? 'view_module' : 'view_list'));
  }

  return (
    <div className='container'>
      <IconSwitch icon={icon} onSwitch={onIconSwitch}/>
      {icon==='view_list' ? <CardView cards = {products}/> : <ListView items = {products} />}
    </div>
  )
}

export default Store;
