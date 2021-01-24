import { Typography, Space, Row, Col, Layout } from 'antd';


const { Title, Text, Paragraph } = Typography;
const { Header, Content, Footer, Sider } = Layout;

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

export default function App() {
    return (
        <Layout>
            <Header style={{ color: 'white' }}>Header</Header>
            <Router>
                <Layout>
                    <Sider style={{ color: 'blue', height: 200,backgroundColor:'darkgray' }}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </Sider>
                    <Content>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Router>
            <Footer style={{color:"white",backgroundColor:'black'}}>Footer</Footer>
        </Layout>


    )
}

