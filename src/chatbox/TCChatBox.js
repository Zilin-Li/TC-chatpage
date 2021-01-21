import React from 'react';
import './TCChatBox.css';
import { AlinaImage, HankImage } from '../image/Image'
import { Search, Grid, Image, Feed, Icon, Input, Button, Card } from 'semantic-ui-react'


const ContactCard = (props) => (
 
        <Card className={props.className || 'chat-contactCard'}>
            <Card.Content textAlign={props.textAlign || 'left'}>
                <Image
                    floated={props.floated || 'left'}
                    size={props.imageSize || 'mini'}
                    src={props.imgeSrc}
                />     
                <Feed.Date content={props.date ||'1 day ago'} />
                <Card.Header>{props.contectName}</Card.Header>
                <Card.Meta>{props.contectActive}</Card.Meta>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
        </Card>

)
const UserTool = (props) => (
    <div className='chat-detailBar'>
        <button className="ui button">
            <Icon name='add circle' size='large' />
        </button>
        <Icon name='search' size='large'></Icon>
        <Icon name='bell outline' size='large'></Icon>
        <div>
            <Image src={AlinaImage} />
            <Icon name='angle down' size='large'></Icon>
        </div>
    </div>
)


export default function TCChatBox() {
    return (
        <div className="chat">
            <div className="chat-nav">
                <p>hello</p>
            </div>
            {/* contact list */}
            <div className="chat-contact">
                <Search className="chat-contactSearch"
                    input={{ icon: 'search', iconPosition: 'left' }}
                    size="mini"
                    value="Search names" />

                <ContactCard
                    className="chat-contactCardActive"
                    imgeSrc={AlinaImage}
                    contectName={'Hank'}
                    contectActive={'Active'}
                    // date={'2 days ago'}
                    description={['10 years project management working experience in ICT industry...']}
                />
                <ContactCard
                    imgeSrc={HankImage}
                    contectName={'Hank'}
                    contectActive={'Active'}
                    // date={'2 days ago'}
                    description={['10 years project management working experience in ICT industry...']}
                />
                <ContactCard
                    imgeSrc={HankImage}
                    contectName={'Hank'}
                    contectActive={'Active'}
                    // date={'2 days ago'}
                    description={['10 years project management working experience in ICT industry...']}
                />
                <ContactCard
                    imgeSrc={HankImage}
                    contectName={'Hank'}
                    contectActive={'Active'}
                    // date={'2 days ago'}
                    description={['10 years project management working experience in ICT industry...']}
                />


            </div>
            {/* chat-box */}
            <div className="chat-box">
                <div className="chat-boxHeader">
                    <header>Alina Williams</header>
                    <p>Active | Last seen 3 hours ago</p>
                    <Icon size='big' name='bars'></Icon>
                </div>
                <div className='chat-boxContent'>
                    box
                </div>

                <div className='chat-boxInput'>
                    <Input
                        icon={<Icon size='big' name='paper plane' />}
                        placeholder='Type message here'
                    />
                    {/* <Input icon='paper plane' placeholder='Type message here' /> */}
                    <Icon size='big' name='file'></Icon>
                </div>
            </div>

            {/* detail */}
            <div className="chat-detail">
                <UserTool />

                <Card centered className="chat-userInfo">
                    <Card.Content>
                        <Image src={AlinaImage} />
                        <Card.Header>Heading 3</Card.Header>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin , sed rhoncus pronin sapien nunc </Card.Description>
                    </Card.Content>
                </Card>
                <Button primary>View details</Button>
                <div className="ui divider"></div>
                <div className='chat-detailSpace'></div>
                <div className="ui divider"></div>
                <Grid className="chat-keywords">
                    <Grid.Row centered>
                        <Button primary>Python</Button>
                        <Button primary>Analyst</Button>
                        <Button primary>Analyst</Button>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Button primary>Analyst</Button>
                        <Button primary>Analyst</Button>
                        <Button primary>Analyst</Button>
                    </Grid.Row>
                </Grid>
            </div>


        </div>




    )
}