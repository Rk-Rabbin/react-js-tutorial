import Styles from '../css/Cssmodule1.module.css'

export const LearnCssModule1 = () => {
  return (
    <div>
        <p className={`${Styles.txt_size_50} ${Styles.txt_color}`}>Learn CSS module 1</p>
    </div>
  )
}
