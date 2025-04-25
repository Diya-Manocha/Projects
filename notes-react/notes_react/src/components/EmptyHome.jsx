import homeEmpty from '../assets/homeEmpty.svg'

const EmptyScreen = () => {
    return(
        <div className='flex items-center justify-center flex-col h-[500px]'>
            <img src={homeEmpty} alt="" />
            <p>Create your first note !</p>
        </div>

    )
}

export default EmptyScreen;