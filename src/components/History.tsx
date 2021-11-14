import React from 'react';
import Layout from './layouts/Layout'

class History extends React.Component {

    constructor(props:any){
        super(props);
    }   

    render(){
        return(
            <Layout>
                <p>No history found.</p>
            </Layout>
            
        );
    }
}

export default History;