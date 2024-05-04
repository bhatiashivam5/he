
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../App.css"
import { Box } from '@mui/material';
export default function MediaCard(item: any) {
    return (
        <Card sx={{ maxWidth: 345 }} className='card-body'>
            <Box className="posted-container">
                <Box className='posted-btn'>
                    <Typography component="span">
                        ⏳ Posted 3 days ago
                    </Typography>
                </Box>
            </Box>
            <CardContent>
                <Box className="company-details">
                    <img src={item?.item?.logoUrl} alt='' />
                    <div>
                        <div>
                            <Typography className='company-name'>{item?.item?.companyName}</Typography>
                            <Typography className='position'>{item?.item?.jobRole}</Typography>
                        </div>
                        <Typography className='exp'>{item?.item?.location} | Exp: {item?.item?.minExp}-{item?.item?.maxExp} years</Typography>
                    </div>
                </Box>
                <Typography className='card-salary'>Estimated Salary: ₹{item?.item?.minJdSalary} - {item?.item?.maxJdSalary} LPA ✅</Typography>
                <Box className='desc-box'>
                    <Typography className='about-company'>
                        About Company:
                    </Typography>
                    <Box>
                        <Typography className='about-us'><strong>About us</strong></Typography>
                        <Typography className='about-us'>Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue.</Typography>
                        <Typography className='about-us'>Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packages..</Typography>
                        <Typography className='about-us'><strong>Founder/Recruiter profiles:</strong></Typography>
                        <Typography><a href="https://www.linkedin.com/in/shivam-bhatia-211a70195/"><Typography>Shivam Bhatia</Typography></a></Typography>
                    </Box>
                </Box>
                <Box className="view-btn">
                    <a href="/flexwash-technologies-senior-engineer?candidateId=U2FsdGVkX1/lV6fMN/4TeDPeKldmClnMNbIkKahcBp5KzXiyype9kIEqKRU7BmZs" className='view-job-link'>View job</a>
                </Box>
                <Box className='poc-info-container'>
                    <Typography className='skills-heading'>Minimum Experience</Typography>
                    <Typography className='skills-exp'>
                        {item?.item?.minExp ? `${item.item.minExp} Years` : "Fresher"}
                    </Typography>
                </Box>
            </CardContent>
            <Box className="status-container">
                <Box className="inner-status-container">
                    <Button className='apply-btn'>⚡ Easy Apply</Button>
                </Box>
            </Box>
        </Card>
    );
}
