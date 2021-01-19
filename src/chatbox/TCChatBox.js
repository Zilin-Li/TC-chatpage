import React from 'react';
import './TCChatBox.css';
import { AlinaImage, HankImage } from '../image/Image'
import { Search, Grid, Image, Feed, Icon, Input, Button, Card, Header, List,Item } from 'semantic-ui-react'

const ContactCard = (props) => (
    <Grid className={props.className || 'chat-contactCard'}>
        <Grid.Row style={props.cardRowStyle}>
            <Grid.Column width={3} style={props.imageStyle}>
                <Image src={props.image} />
            </Grid.Column>
            <Grid.Column width={7} style={props.cardNameStyle} >
                <Item.Content>
                    <Item.Header as='a'>{props.header1}</Item.Header>
                    <Item.Meta>{props.contactState}</Item.Meta>
                </Item.Content>    
            </Grid.Column>
            <Grid.Column width={6}>
                <Feed.Date>{props.date}</Feed.Date>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row style={props.cardRowStyle}>
            {props.description && <List style={props.dStyle} items={props.description} />}
        </Grid.Row>
    </Grid>
)

export default function TCChatBox() {

    return (
        <div className="chat">

            <div className="chat-contact">
                <Search
                    input={{ icon: 'search', iconPosition: 'left' }}
                    size="mini"
                    value="Search names" />

                <ContactCard
                    image={AlinaImage}
                    header1={'Hank'}
                    contactState={'Active'}
                    date={'2 days ago'}
                    description={['10 years project management working experience in ICT industry...']}
                    imageStyle={{ padding: '0' }}
                    cardNameStyle={{ textAlign: 'left', magrinLeft: '1vw' }}
                    feedStyle={{ textAlign: 'right', marginTop: '0' }}
                    dStyle={{ textAlign: 'left' }}
                    cardRowStyle={{ padding: '0 0 5px 0' }}
                />
            </div>

            {/* chat-box */}
            <div className="chat-box">
                <div className="chat-boxHeader">
                    <header>Alina Williams</header>
                    <p>Last seen 3 hours ago</p>
                    <Icon name='bars'></Icon>


                </div>
                <div className='chat-boxContent'>
                    box
                </div>

                <div className='chat-boxInput'>
                    <Input icon='paper plane' placeholder='Type message here' />
                    <Icon name='file'></Icon>
                </div>
            </div>

            {/* detail */}
            <div className="chat-detail">
                <div className='chat-detailBar'>
                    <Button icon>
                        <Icon name='add circle' />
                    </Button>
                    <Icon name='search'></Icon>
                    <Icon name='bell outline'></Icon>
                    <Image src={AlinaImage} />

                </div>

                <Card centered>
                    <Card.Content>
                        <Image src={AlinaImage} />
                        <Card.Header>Heading 3</Card.Header>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin , sed rhoncus pronin sapien nunc </Card.Description>

                    </Card.Content>

                </Card>
                <Button primary>View details</Button>

                <div className="ui divider"></div>
                <div className='chat-detailSpace'>space</div>
                <div className="ui divider"></div>

                <Grid>
                    <Grid.Row>
                        <Button primary>View details</Button>
                        <Button primary>View details</Button>
                        <Button primary>View details</Button>

                    </Grid.Row>
                    <Grid.Row>
                        <Button primary>View details</Button>
                        <Button primary>View details</Button>
                        <Button primary>View details</Button>

                    </Grid.Row>

                </Grid>

            </div>


        </div>



    )
}