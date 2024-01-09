import React, { useState, useEffect, useCallback } from 'react'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import { styContainer, styWrapper, styToolbar, styEditor } from './style'
const getInitialState = (defaultValue) => {
  if (defaultValue) {
    const blocksFromHtml = htmlToDraft(defaultValue)
    const { contentBlocks, entityMap } = blocksFromHtml
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    )
    return EditorState.createWithContent(contentState)
  } else {
    return EditorState.createEmpty()
  }
}
const RichEditor = ({ defaultValue, onChange }) => {
  const [editorState, setEditorState] = useState()
  const [defaultValueState, setdefaultValueState] = useState()
  useEffect(() => {
    if (defaultValue) {
      const initialState = getInitialState(defaultValue)
      onEditorDefaultStateChange(initialState)
    }
  }, [ defaultValue])
  const onEditorDefaultStateChange = useCallback(
    (editorState) => {
      setdefaultValueState(editorState)
      return onChange(
        draftToHtml(convertToRaw(editorState.getCurrentContent()))
      )
    },
    [onChange]
  )
  const onEditorStateChange = useCallback(
    (editorState) => {
      setEditorState(editorState)
      return onChange(
        draftToHtml(convertToRaw(editorState.getCurrentContent()))
      )
    },
    [onChange]
  )

console.log(defaultValue , editorState)
  return (
    

      
    
<div></div>
  )
}
RichEditor.propTypes = {}
RichEditor.defaultProps = {}
export default RichEditor
