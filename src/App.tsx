import {Box, Button, Container, Flex, Text, TextField} from '@radix-ui/themes'
import './App.css'
import { CheckCircledIcon, DotsHorizontalIcon, Pencil1Icon, PlusIcon } from '@radix-ui/react-icons'
import { useTaskContext } from './contexts/TaskContext'

type Task = {
  id: string
  title: string
  description: string
  completed: boolean
}

function TaskForm({ onSubmit, onCancel, defaultValues } : { onSubmit : React.FormEventHandler<HTMLFormElement>, onCancel: () => void, defaultValues?: Task}) { 
  return        <form onSubmit={onSubmit}>
          <Flex direction='column' gap='3' p='4'>
           <label>
            <TextField.Root name='title' placeholder='Title' variant='soft' size='3' color='gray' defaultValue={defaultValues?.title} />
          </label> 
          <label>
            <TextField.Root name='description' placeholder='Description' variant='soft' color='gray' defaultValue={defaultValues?.description} />
          </label> 
          <Flex direction='row-reverse' gap='2'>
            <Button color='red' size='3'>Add task</Button>
            <Button type='button' color='gray' size='3' onClick={onCancel}>Cancel</Button>
           </Flex>
         </Flex>
       </form>
}

function App() {
const {tasks, 
            setTasks,
            selectedTask, setSelectedTask,
            modalOpen, setModdalOpen,
            point} = useTaskContext();
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
              setModdalOpen(true)
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
        <button className='add-button' onClick={() => setModdalOpen(true)}>
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
          setModdalOpen(false)
          setSelectedTask(undefined)
        }}
        onCancel={() => setModdalOpen(false)}
        defaultValues={selectedTask}
        />
      </Box>
      )}
    </Flex>
  </Container>
  )
}

export default App
