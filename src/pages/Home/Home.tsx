import classes from './styles.module.scss';
import Layout from '../../components/Layout/Layout';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PostSection from '../../components/PostSection/PostSection';
import Post from '../../components/Post/Post';

export default function Home() {
  return (
    <Layout
      children={
        <div className={classes.fullPage}>    
          <Breadcrumb categories=
              {
              [
                  {title: "COVID-19", onClick: () => {console.log("COVID-19")}},
                  {title: "Business Research", onClick: () => {console.log("Busimess Research")}},
                  {title: "Management", onClick: () => {console.log("Management")}},
                  {title: "Coding", onClick: () => {console.log("Coding")}},
              ]
              }
          />
          <div>
            <PostSection
              introTitle='FEATURED'
              title='Latest posts'
              options={[]}
              gridSizes={{gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gridTemplateRows: "1fr 1fr"}}
              children={[
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Bussiness Research"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "1 / span 2",
                  gridColumn: "1 / 1"
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Management"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Coding"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                }
              ]}
            />
          </div>
          <div>
            <PostSection
              introTitle='PROJECTS'
              title='Business Research'
              options={[]}
              gridSizes={{gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gridTemplateRows: "1fr 1fr"}}
              children={[
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Bussiness Research"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Management"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Coding"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Coding"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                }
              ]}
            />
          </div>  
          <div>
            <PostSection
              introTitle='TECHNOLOGIES & TRENDS'
              title='Coding'
              options={[]}
              gridSizes={{gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridTemplateRows: "1fr 1fr"}}
              children={[
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Bussiness Research"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Management"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Coding"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Coding"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Coding"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                },
                {
                  child: <Post 
                    onClick={() => {console.log("123")}}
                    backgroundImageURL="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=GHkGQlRP"
                    subject="Coding"
                    title="How to face a crisis and be successful"
                    author="By Author Name" 
                  />,
                  gridRow: "",
                  gridColumn: ""
                }
              ]}
            />
          </div>
      </div>      
      }
    />
  )
}
