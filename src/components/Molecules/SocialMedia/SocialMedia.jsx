import React from 'react'
import './socialMedia.scss'

export const SocialMedia = ({ url, icon, contact }) => {
    return (
        <div className='socialMedia-container'>
            <a href={url} target='_blank' >{icon}</a>
            <a className='socialMediaText' href={url}  target='_blank' >
                {contact ? contact : url}
            </a>
        </div>
    )
}
