import './filterBar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function filterBar(){
    return(
        <div>
      
        <div className='row container-fluid outerCetegoryFilterBar ' style={{padding:'4px',marginBottom:'15px'}} >
                <div className='col-12 filterBarHeading' style={{ padding:'5px 7px',marginTop:'20px' ,display:'flex',justifyContent:'space-between' }}>
                    <h2 style={{display:'inline'  ,marginLeft:'7px',color:'#F57224'}}>Categories</h2> 
                    <Link style={{paddingTop:'4px',textDecoration:'none',fontWeight:'normal' ,color:'red' ,marginRight:'0px'}} to='ShowMore'><h6 >Show More
                        <FontAwesomeIcon  style={{color:'rgb(60, 205, 242)',marginLeft:'4px',marginRight:'0px'}} icon={faAngleDoubleRight}/> </h6></Link>
                </div>
                <div className='row container-fluid cetegoryFilterBar'style={{ padding:'0px',margin:'0px' }}>
                <div className='col-12 col-sm-6 col-lg-6 col-xl-6' style={{ padding:'0px',margin:'0px' ,display:'flex-inline'}}>
            
                <Link to={{ pathname: "/CetegoryProducts", state:'Biscuit,Chocolate'}}>    
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block'}} >
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                        <caption style={{fontSize:'12px',paddingLeft:'0px',margin:'0px'}}>#Biscuits& Chocolates</caption> 
                    </div> 
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Chips'}}> 
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block' }} >
                        <img style={{width:'60px',height:'60px',padding:'0px',borderRadius:'50%'}} src='https://newsd.in/wp-content/uploads/2018/07/pepsico-india-lays-and-kurkure-809.jpg' alt='Chips'/>
                        <caption style={{fontSize:'12px',paddingLeft:'7px',margin:'0px'}}>#Chips</caption> 
                    </div>
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Cold Drink'}}>       
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'7px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://4.imimg.com/data4/JY/CV/MY-4517806/stationary-250x250.jpg' alt='stationary'/> 
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Cold Drinks</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Kachup,Souce'}}>       
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block'}} >
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                        <caption style={{fontSize:'12px',paddingLeft:'0px',margin:'0px'}}>#Kachup& Souces</caption> 
                    </div>
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Herb,Spice'}}>       
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'0px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                        <caption style={{fontSize:'12px',paddingLeft:'5px',margin:'0px'}}>#Herbs& Spices</caption> 
                    </div>                    
                </Link> 
               
              </div>
              <div className='col-12 col-sm-6 col-lg-6  col-xl-6' style={{ padding:'0px',margin:'0px' ,display:'flex-inline'}}>
            
                <Link to={{ pathname: "/CetegoryProducts", state:'Grain,Rice'}}>     
                    <div className='col-2' style={{marginLeft:'0px',marginRight:'7px',display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Grain& Rice</caption> 
                    </div>
                </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Reciepe Masalah'}}>       
                    <div className=' col-2' style={{ marginLeft:'0px',marginRight:'7px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Recipe Masalah</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Care & Beuty'}}>       
                    <div className='col-2' style={{ marginLeft:'0px',marginRight:'7px',display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                        <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}}>#Care& Beuty</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Stationary'}}>   
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'7px' ,display:'inline-block'}}>
                        <img style={{width:'60px',height:'60px',padding:'0px',margin:'0px',borderRadius:'50%'}} src='https://4.imimg.com/data4/JY/CV/MY-4517806/stationary-250x250.jpg' alt='stationary'/> 
                        <caption style={{fontSize:'12px',paddingLeft:'0px',margin:'0px'}}>#Stationary</caption> 
                    </div>
                    </Link> 
                <Link to={{ pathname: "/CetegoryProducts", state:'Soap,Detergent'}}>       
                    <div className=' col-2'style={{ marginLeft:'0px',marginRight:'0px',display:'inline-block' }} >
                        <img style={{width:'60px',height:'60px',padding:'0px',borderRadius:'50%'}} src='https://c8.alamy.com/comp/JX134J/detergents-and-brush-tools-laundry-and-cleaning-icon-vector-illustration-JX134J.jpg' alt='Chips'/>
                        <caption style={{fontSize:'12px',paddingLeft:'7px',margin:'0px'}}>#Soap& Detergents</caption> 
                    </div> 
                    </Link> 
              
              </div>
              </div>
        </div>

      </div>
    )
}
export default filterBar;