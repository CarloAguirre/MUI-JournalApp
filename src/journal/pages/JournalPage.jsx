import { AddOutlined, MailLockOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layaut/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <>
    <JournalLayout>
      {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dicta quos ipsum nam incidunt sunt, ea vitae quaerat. Quidem quas error repellendus accusantium rerum labore aut ullam beatae soluta?</Typography> */}

      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover':{backgroundColor: 'error.main', opacity: .9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>

    </JournalLayout>

    </>
  )
}
