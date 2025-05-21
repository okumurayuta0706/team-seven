import {Box, Button, Container, Flex, Text, TextField} from '@radix-ui/themes'
import './App.css'
import { CheckCircledIcon, DotsHorizontalIcon, FontRomanIcon, Pencil1Icon, PlusIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

function Pazzle() {
  const[tasks, setTasks] = useState<Task[]>([])
  const[modalOpen, setModalOpen] =useState(false)
  const[selectedTask, setSelectedTask] = useState<Task | undefined>()
  return (
    <Container size='4' p='4'>
      <Flex gap='4' direction='column' >
        <Text size='7' weight='bold' >
          Inbox
        </Text>
        <Flex justify='start' direction='column'>
          {tasks.filter(task => !task.completed).map(task => (
          <Flex key={task.id} gap='4' align='start' pt='5' className='row'>
            < Button variant='ghost' color='gray'>
              <Flex as='span' justify='center' align='center' onClick={() => setTasks(prev=> prev.map(ele => ele.id === task.id ?{ ...task, completed: true} : ele))}>
                <CheckCircledIcon />
              </Flex> 
            </Button>
            <Flex pb='4' direction='column' flexGrow='1'>
              <Text size='2'>{task.title}</Text> 
              <Text size='1' color='gray'>{task.description}</Text>
            </Flex>
            < Button variant='ghost' color='gray'>
            <Flex as='span' justify='center' align='center' onClick={() => {
              setSelectedTask(task) 
              setModalOpen(true)
            }}>
              <Pencil1Icon />
            </Flex>
            </Button>
            < Button variant='ghost' color='gray'>
            <Flex as='span' justify='center' align='center'>
            <DotsHorizontalIcon />
            </Flex>
            </Button>
          </Flex> 
          ))}
        </Flex>
        {!modalOpen ? (
       <Flex justify='start'>
        <button className='add-button' onClick={() => setModalOpen(true)}>
          <span className='icon'>
           <PlusIcon />
          </span>
          <Text weight='light' size='2'>
           Add a task
         </Text>
        </button>
      </Flex>
        ) : (
        <Box className='form-wrapper'>
        <TaskForm onSubmit={e => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const title = formData.get('title')?.toString()
          const description = formData.get('description')?.toString()
          if(!title || !description) return
          if(selectedTask) {
            setTasks(prev => prev.map(task => task.id === selectedTask.id ? { ...task, title, description} : task))
          } else {
            setTasks(prev => [...prev,{ id: Date.now().toString() , title, description, completed: false }])
          }
          setModalOpen(false)
          setSelectedTask(undefined)
        }}
        onCancel={() => setModalOpen(false)}
        defaultValues={selectedTask}
        />
      </Box>
      )}
    </Flex>
  </Container>
  )
}

export default Pazzle
