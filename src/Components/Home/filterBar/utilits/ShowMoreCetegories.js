import { useCookies } from 'react-cookie';
import {useEffect,useState} from 'react';
import './ShowMoreCetegories.css';
import '../../line.css';
import CardProducts from '../../cardProductsJSX';
function ShowMoreCetegories(){
   
    const [cookie] = useCookies(['jwt']);      
    const [cetegory , setCetegory] = useState(' ')
    const [products , setProducts] = useState([])

     const cetegorySelectedChange= async(category)=>{
       console.log(category)  ;
        
    };
    
 
  
//     const cetegorySelected=(e)=>{
//         const selectedCetegory= e.target.innerHTML;
//      let count =1;
//          items= products.map(item=>{           
//             if(item.pCetegory === selectedCetegory){   
//                 console.log('clicked');                    
//               return count = count +1;   
//             } else{             
//                 return;
//               }            
//         });
//     }  
//     const allProductCetegories = products.map(item=>{
//         return  <div className=' col-3'style={{ marginLeft:'0px',marginRight:'7px',width:'60px',height:'60px',display:'inline-block' ,borderRadius:'50%'}}  >
//         <caption style={{fontSize:'12px',paddingLeft:'1px',margin:'0px'}} name='caption' onClick={cetegorySelected }>{item.pCetegory}</caption>       
// </div> 
//     })
    
    return(
<div>
     
 <div className='row container-fluid' style={{padding:'auto'}} >
        <div className='col-12 ' style={{ marginTop:'30px' ,display:'flex',justifyContent:'center' }}>
            <h2 style={{display:'inline'  }}>All Cetegories</h2> 
            
        </div>
    <hr style={{margin:'50px 0px',fontWeight:'bold',fontSize:'20px', color:'black'}}className="hr-text " data-content="Edible Product Cetegories"/>
   <div className='cetegory row container-fluid' style={{ margin:'0px',padding:'0px'}} >
    <div className='col-12 col-sm-6 col-lg-6' style={{ marginLeft:'0px',padding:'auto',display:'flex-inline'}}>

            <div className=' col-3'style={{ display:'inline-block' }} onClick={()=>cetegorySelectedChange('Chips')} >
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://newsd.in/wp-content/uploads/2018/07/pepsico-india-lays-and-kurkure-809.jpg' alt='Chips'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Chips</caption> 
            </div> 
            <div className='col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Chocolates</caption> 
            </div>
          
            <div className='col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Biscuits</caption> 
            </div>
            <div className=' col-3'style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://4.imimg.com/data4/JY/CV/MY-4517806/stationary-250x250.jpg' alt='stationary'/> 
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Cold Drinks</caption> 
            </div>
            
    </div> 
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>

            <div className=' col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Herbs</caption> 
            </div>
            <div className='col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Grans</caption> 
            </div>
            <div className=' col-3' style={{display:'inline-block'}}onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Recipe Masalah</caption> 
            </div>
            <div className=' col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Spices')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://www.joysspices.com/image/cache/catalog/AUg%20Cam%20Sprint/Untitled%20design%20(1)-200x200.jpg' alt='Spices'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Spices</caption> 
            </div>
          
       
    </div>
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>

            
            <div className=' col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Souces</caption> 
            </div>
            <div className=' col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://i5.paktive.com/p9/t/172EC04.jpg' alt='Biscuites'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Kachup</caption> 
            </div>
    </div> 
    </div>
    <hr style={{margin:'50px 0px',fontWeight:'bold',fontSize:'20px', color:'black'}}className="hr-text " data-content="Non Edible Product Cetegories"/>
    <div className='cetegory row container-fluid' style={{ margin:'0px',padding:'0px'}}>
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>

            <div className=' col-3'style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://4.imimg.com/data4/JY/CV/MY-4517806/stationary-250x250.jpg' alt='stationary'/> 
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Stationary</caption> 
            </div>
            <div className=' col-3'style={{display:'inline-block' }}onClick={()=>cetegorySelectedChange('Herbs')} >
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://c8.alamy.com/comp/JX134J/detergents-and-brush-tools-laundry-and-cleaning-icon-vector-illustration-JX134J.jpg' alt='Chips'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Detergents</caption> 
            </div>  
            <div className=' col-3'style={{display:'inline-block' }}onClick={()=>cetegorySelectedChange('Herbs')} >
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://c8.alamy.com/comp/JX134J/detergents-and-brush-tools-laundry-and-cleaning-icon-vector-illustration-JX134J.jpg' alt='Chips'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Soap</caption> 
            </div>  
            <div className='col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Beuty</caption> 
            </div>
            
    </div> 
    <div className='col-12 col-sm-6 col-lg-6' style={{marginLeft:'0px',padding:'auto',display:'flex-inline'}}>  
            <div className='col-3' style={{ display:'inline-block'}} onClick={()=>cetegorySelectedChange('Herbs')}>
                <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNSCasojaM26VuqRnNFke3sV24oQltq0-hQ&usqp=CAU' alt='Daal'/>
                <caption style={{fontSize:'12px',fontWeight:'bold'}}>#Care</caption> 
            </div>
    </div>
  </div>
</div>
</div>
    ) 
}
export default ShowMoreCetegories;