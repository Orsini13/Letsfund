'use client';
import React from 'react';

function Campaign() {
    const [hasContent, setHasContent] = React.useState(false);
    if(hasContent){
        return <div>campaign has content</div>
    }
  return (
    <div>campaign</div>
  )
}

export default Campaign;