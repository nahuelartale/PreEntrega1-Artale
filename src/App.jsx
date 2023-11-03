import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './Component/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from './Component/ItemListContainerComponent/ItemListContainerComponent';





function App() {
  

  return (
    <div>
      <NavBarComponent />
      <ItemListContainerComponent greeting='Bienvenidos al Himalaya!'/>
    </div>
  )
}

export default App
