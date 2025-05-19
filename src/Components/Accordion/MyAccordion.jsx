import * as React from 'react'; 
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import './Accordion.css'

export default function MyAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='Accordion'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor:'#161616', color:'white',borderRadius:'3px',border:'2px solid #202024', boxShadow:'1px 1px 10px #161610' }} >
        <AccordionSummary
          expandIcon={<AddIcon className='text-[#FF9800]'/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='bg-black'
        >
          <Typography sx={{ width: '90%', flexShrink: 0 }}>
          آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-[#979797] pb-5'>
          بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر، هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات بیشتر می‌توانید فیلم‌های آموزشی مربوط به <a href="#" className='text-[#C89933]'>دانلود از طریق سایت</a> و <a href="#" className='text-[#C89933]'>دانلود از طریق  اپلیکیشن</a> را تماشا کنید.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='mt-2' sx={{backgroundColor:'#161616', color:'white',borderRadius:'3px',border:'2px solid #202024', boxShadow:'1px 1px 10px #161610'}}>
        <AccordionSummary
          expandIcon={<AddIcon className='text-[#FF9800]' />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '90%', flexShrink: 0 }}>آیا فیلیمو برای خارج از ایران در دسترس است؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-[#979797]'>
          خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className=' mt-2' sx={{backgroundColor:'#161616', color:'white',borderRadius:'3px',border:'2px solid #202024', boxShadow:'1px 1px 10px #161610'}}>
        <AccordionSummary
          expandIcon={<AddIcon className='text-[#FF9800]' />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className='rounded-lg'
        >
          <Typography sx={{ width: '90%', flexShrink: 0 }}>
          آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='rounded-lg'>
          <Typography className='text-[#979797]'>
          تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='mt-2 rounded-lg' sx={{backgroundColor:'#161616', color:'white',borderRadius:'3px',border:'2px solid #202024', boxShadow:'1px 1px 10px #161610'}}>
        <AccordionSummary
          expandIcon={<AddIcon className='text-[#FF9800] '/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '90%', flexShrink: 0 }}>از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-[#979797]'>
          برای نصب نرم‌افزار اندرویدی فیلیمو می‌توانید ازطریق کافه بازار یا مایکت اقدام به دانلود کنید. یا می‌توانید روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. <a href="#" className='text-[#FF9800]'> (دانلود مستقیم نرم‌افزار اندروید)</a> برای دانلود نرم‌افزار iOS فیلیمو نیز کافیست روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. <a href="#" className='text-[#FF9800]'>(دانلود مستقیم نرم‌افزار iOS)</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
