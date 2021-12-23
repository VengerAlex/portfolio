import github_icon from '../assets/icons/github.svg'
import gmail_icon from '../assets/icons/gmail.svg'
import linkedin_icon from '../assets/icons/linkedin.svg'

const Footer = () => {
    return (
        <div className="text-center py-5">
            <div className="flex justify-center py-3">
                <a href="https://github.com/Rydl3r" className="mx-3"><img src={github_icon} alt="" /></a>
                <a href="mailto:1rydler@gmail.com" className="mx-3"><img src={gmail_icon} alt="" /></a>
                <a href="https://www.linkedin.com/in/ivan-mukoed-7636a4214/" className="mx-3"><img src={linkedin_icon} alt="" /></a>
            </div>
            <div className='text-gray-300'>Ivan Mukoed. 2022. All right reserved</div>
        </div>
    )
}

export default Footer
