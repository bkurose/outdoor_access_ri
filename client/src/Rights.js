import NavBar from "./NavBar"
function Rights (){

    return (
        <div>
            <NavBar />
            <div id="rights-image">
                <div id='rights-container'>
            <h1>You have a <b>CONSTITUTIONAL RIGHT</b> to access the shore in Rhode Island!</h1>
            <br/>
            <p style={{"font-size": "25px"}}><b style={{"font-size": "30px"}}>Article 1, Section 17 of the Rhode Island Constitution:</b>
            <br/><i>“The people shall continue to enjoy and freely exercise all the rights of fishery, and the privileges of the shore</i>, to which they have been heretofore entitled under the charter and usages of this state, including but not limited to fishing from the shore, the gathering of seaweed, leaving the shore to swim in the sea and passage along the shore”
            <br/>
            <br/><b style={{"font-size": "30px"}}>Article 1, Section 16 of the Rhode Island Constitution:</b>
            <br/>“…furtherance of the protection of the rights of the people to enjoy and freely exercise the rights of fishery and the privileges of the shore, as those rights and duties are set forth in section 17, shall be an exercise of the police powers of the state, shall be liberally construed, and <i>shall not be deemed to be a public use of private property</i>.”</p>
            </div>
            </div>
        </div>
    )
}

export default Rights