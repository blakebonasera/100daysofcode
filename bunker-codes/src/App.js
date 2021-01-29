import map from './bunker-map.jpg'
import './App.css';

function App() {
  return (
      <>
    <div className="container bg-dark">
      <h1 className='text-danger text-center bg-dark'>Warzone Codes</h1>
      <ul class="list-group border-danger ">
      <li class="list-group-item bg-dark text-danger border-danger"> <strong>1 DAM</strong> - RED ACCESS CARD</li>
        <li class="list-group-item bg-dark text-danger border-danger"> <strong>3 North Boneyard</strong> - 87624851</li>
        <li class="list-group-item bg-dark text-danger border-danger "><strong>4 Boneyard</strong> - 97264138</li>
        <li class="list-group-item bg-dark text-danger border-danger"> <strong>5 South </strong> - RED ACCESS CARD</li>
        <li class="list-group-item bg-dark text-danger border-danger"><strong>6 Park</strong> - 60274513</li>
        <li class="list-group-item bg-dark text-danger border-danger"> <strong>7 Prison shack</strong> - 72948531</li>
        <li class="list-group-item bg-dark text-danger border-danger"> <strong>10 Quarry</strong> - RED ACCESS CARD</li>
        <li class="list-group-item bg-dark text-danger border-danger"><strong> TV Station</strong> - 27495810</li>
        <li class="list-group-item bg-dark text-danger border-danger"> <strong>Farmland</strong> - 49285163</li>
      </ul>
      <div className="col-6">
      <img src={map} alt="map"/>
      </div>
    </div>
      </>
  );
}

export default App;
