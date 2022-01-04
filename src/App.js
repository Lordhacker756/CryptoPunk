import './App.css';
import Header from './Components/Header'
import CollectionCard from './Components/CollectionCard';
import {useState,useEffect} from 'react'
import axios from 'axios';
import PunkList from './Components/PunkList';
import Main from './Components/Main';


function App() {
  const [punkListData, setpunkListData] = useState([])
  const [selectedPunk, setselectedPunk] = useState(0)
  useEffect(() => {
    const getMyNfts = async() => {
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0xC2Ab05552B8A2A3f1F8B3996bDBffbE9749Fa3fE&order_direction=asc")
      // console.log(openseaData.data.assets)
      setpunkListData(openseaData.data.assets)
    }
    return getMyNfts()
    }, [])
  return (
  <div className="app">
    <Header/>
    {
    punkListData.length > 0 && (<>
    <Main selectedPunk={selectedPunk} punkListData = {punkListData}/>
    <PunkList punkListData = {punkListData} selectedPunk={selectedPunk} setselectedPunk={setselectedPunk}/>
    </>)
    }
    
  </div>
  );
}

export default App;