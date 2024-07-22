'use client';
import React from 'react';
import { Button,Stack,Box,Wrap,WrapItem, ButtonGroup } from '@chakra-ui/react'
import './page.css'

function Campaign() {
    const [hasContent, setHasContent] = React.useState(false);
    if(hasContent){
        return <div>campaign has content</div>
    }
  return (
    <div className='creator'>
        
        <div>
        <h3><b>Campaigns</b></h3>
        <h1><b>let create your first campaign</b></h1>
        </div>

        <button><b>+  Create Campaign</b></button>

 
    </div>
  )
}

export default Campaign;