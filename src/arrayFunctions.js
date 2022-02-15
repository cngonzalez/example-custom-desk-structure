/*
 * In this example, I am overriding
 * the input array code only for certain types.
 * 1. First I check if my array can contain this type.
 * 2. Next, I declare functions to ensure my custom button
 *        has the typical behavior expected for buttons in array field types. 
 * 3. Then I create a custom button for that type.
 * 4. Then I return it from this function,
 *        which will be invoked everywhere, not just where my type appears.
 * 
 * This is a minimal example.
 * There's additional work you should do here -- around conditional read-only logic for example,
 * or handling multiple types in arrays.
 * Please refer to how Array Functions are declared in Sanity and use what you need.
 * https://github.com/sanity-io/sanity/blob/next/packages/%40sanity/form-builder/src/inputs/arrays/common/ArrayFunctions.tsx
 */ 
import {AddIcon} from '@sanity/icons'
import React from 'react'
import {Button, Grid } from '@sanity/ui'
//this will be deprecated in v3 -- you will just have to import it from @sanity/form-builder or similar instead
import DefaultArrayFunctions from 'part:@sanity/form-builder/input/array/functions-default'

export default function CustomArrayFunctions(props) {
  
  const {type, children, onCreateValue, onAppendItem} = props
  
  //1. First I check if my array can contain this type.
  const isMyType = props.type.of.find(t => t.name === 'image') 

  //2. Next, I declare functions to ensure my custom button
  //has the typical behavior expected for buttons in array field types. 
  const insertItem = React.useCallback(
    (itemType) => {
      const item = onCreateValue(itemType)

      onAppendItem(item)
    },
    [onCreateValue, onAppendItem]
  )

  const handleAddBtnClick = React.useCallback(() => {
    insertItem(type.of[0])
  }, [type, insertItem])

//3. Then I create a custom button for that type.
const customButton = <Button icon={AddIcon} mode="ghost" onClick={handleAddBtnClick} text="Add my custom carousel image" />

  return (
    <>
      { isMyType ? 
        (
          //4. Then I return it from this function.
          <Grid gap={1} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'}}>
            { customButton }
            { children }
          </Grid>
        ) :
        //Because this is invoked everywhere, be sure to include default behavior to handle this.
        (
          <DefaultArrayFunctions {...props} /> 
        )
      }   
    </>
  )
}