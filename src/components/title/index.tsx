import "./title.scss"
export const Title = () => {
    return <h1 className="title">{process.env.REACT_APP_APPLICATION_NAME}</h1>
}