import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import { convertFromHTML } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditNewsEditor = ({ defaultValue, setConvertedContent }) => {
    const [editorState, setEditorState] = useState(() => {
        const contentState = ContentState.createFromBlockArray(
            convertFromHTML(defaultValue || '<p></p>')
        );
        return EditorState.createWithContent(contentState);
    });

    const handleEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const handleContentStateChange = (contentState) => {
        setConvertedContent(draftToHtml(contentState));
    };

    const toolbarOptions = {
        options: ['blockType', 'inline', 'list', 'colorPicker', 'link', 'image'],
        blockType: {
            inDropdown: true,
            options: ['H2', 'H3', 'H4', 'Normal', 'Blockquote']
        },
        inline: {
            inDropdown: false,
            options: ['bold', 'italic', 'underline']
        },
        link: {
            defaultTargetOption: '_self',
            options: ['link', 'unlink']
        },
        list: { options: ['ordered', 'unordered'] },
        image: {
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: undefined,
            alt: { present: true, mandatory: true }
        }
    };

    const localization = {
        locale: 'en-us',
        translations: {
            'generic.add': 'Add',
            'generic.cancel': 'Cancel',
            'components.controls.blocktype.normal': 'Normal',
            'components.controls.blocktype.h2': 'Heading 2',
            'components.controls.blocktype.h3': 'Heading 3',
            'components.controls.blocktype.h4': 'Heading 4  ',
            'components.controls.blocktype.blockquote': 'Blockquote',
            'components.controls.link.link': 'Link',
            'components.controls.link.unlink': 'Unlink',
            'components.controls.image.image': 'Image',
            'components.controls.image.fileUpload': 'File Upload',
            'components.controls.image.byURL': 'URL',
            'components.controls.image.dropFileText': 'Drop the file or click to upload'
        }
    };

    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
            onContentStateChange={handleContentStateChange}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            toolbar={toolbarOptions}
            localization={localization}
        />
    );
};

export default EditNewsEditor;
