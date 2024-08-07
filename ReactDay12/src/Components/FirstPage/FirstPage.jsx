import './FirstPage.css'
import Victorimg from '../../assets/images/image-victor.jpg'
function FirstPage(){
    return(

<div id="firstpage">
<div id="updiv">
<img  id="victorimg" src={Victorimg}/>
</div>
<div id="downdiv">
<div id="london">
    <div id="labels">  
        <label id="boldlab">Victor Crest</label>
    <label  className='greylab' id="lab26">26</label>
        </div>
  <label className='greylab'>London</label>
</div>
<hr/>

<div id="downdivs">
    <div className='downdivs'>
    <label id="boldlab">80K</label>
    <label  className='greylab'>Followers</label>

    </div>

    <div className='downdivs'>
    <label id="boldlab">803K</label>
    <label  className='greylab'>Photos</label>
    </div>
    <div className='downdivs'>
    <label id="boldlab">1.4K</label>
    <label  className='greylab'>Likes</label>
    </div>

</div>
    
</div>

</div>


    )
}
export default FirstPage