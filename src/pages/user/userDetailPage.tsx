import { useParams } from 'react-router-dom';
import { useSingleUser } from '../../hooks/queries/useSingleUser';
import { Avatar, Button, Empty, Skeleton, Tabs } from 'antd';
import Navbar from '../../components/navbar';
import {
    Calendar,
    Eye,
    Heart,
  MessageCircleMoreIcon,
  MoreHorizontal,
  PlusCircle,
  Send,
  Users,
} from 'lucide-react';
import type { TabsProps } from 'antd';
import Footer from '../../components/footer';

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useSingleUser(id!);

  if (isLoading || !user) {
    return (
      <div className="p-6">
        <Skeleton.Avatar active size="large" />
        <Skeleton.Input active size="default" className="mt-4" />
      </div>
    );
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'About',
      children: (
        <div className="p-4 text-[16px] bg-gray-300 rounded-xl flex items-center justify-between ">
        <div className='flex flex-col items-center'>
            <Users/> 
    <p>{user.followers?.length}</p>
    <p>folowers</p>
        </div>
        <div  className='flex flex-col items-center'>
            <Heart/>
         <p>0</p>
         <p>liked</p>
        </div>
        <div  className='flex flex-col items-center'>
            <Calendar/>
            <p>Invalid date</p>
            <p>joined</p>
        </div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Products',
      children: (
    <div className='pb-[40px]'>
    <Empty description={"no products..."}/>
    </div>
      ),
    },
    {
      key: '3',
      label: 'Photos',
      children: (
        <div>
            <div className='border-1 border-gray-300 w-[318px] text-left p-2 rounded-xl'>
                <h1 className='font-bold text-[16px]'>Flower subscription: A new to Gif:</h1>
                <p>“You take away all the other luxuries in life, and if you  can make someone smile and laugh, you have given  the most special gift: happiness.” Brad Garrett</p>
                <div className='flex items-center justify-around p-2'>
                    <p><Eye/>410</p>
                    <p><MessageCircleMoreIcon/>0</p>
                    <p><Heart/>0</p>
                </div>
            </div>
        </div>
      ),
    },
    {
        key: '4',
        label: 'Followers',
        children: (
       <div>
   <div className='border-1 border-gray-300 w-[318px] text-left p-2 rounded-xl'>
             <div className='flex items-center gap-2'>
             <Avatar/>
             <p className='text-[17px] font-bold'>User Userov</p>
             </div>
                <div className='flex items-center justify-around p-2 border-t border-t-gray-300 mt-5'>
                    <p><Eye/>410</p>
                    <p><MessageCircleMoreIcon/>0</p>
            <p><MoreHorizontal/>more</p>
                </div>
            </div>
       </div>
        ),
      },
  ];

  return (
    <div className="w-[95%]  mx-auto">
      <div className="border-b border-b-green-500 mb-5">
        <Navbar />
      </div>

      <img
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
        alt="cover"
        className="w-full h-[200px] object-cover"
      />

      <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center pt-[70px] gap-6">
        <div className="flex items-center gap-6">
          <img
            className="rounded-full w-[120px] h-[120px] md:w-[200px] md:h-[200px] border-4 border-green-500 object-cover"
            src={user.profile_photo}
            alt={user.name}
          />
          <div className="text-center md:text-left">
            <div className="text-[24px] md:text-[30px] font-bold flex flex-col md:flex-row md:items-center gap-2">
              <h1>{user.name}</h1>
              <h1>{user.surname}</h1>
            </div>
            <p className="text-gray-500 text-[12px] md:text-[14px]">
              Followers: {user.followers?.length || 0}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <Button className="!bg-green-500 !text-white flex items-center gap-2 !px-4 !py-2">
            <MessageCircleMoreIcon size={16} /> Start chat
          </Button>
          <Button className="!bg-green-500 !text-white flex items-center gap-2 !px-4 !py-2">
            <Send size={16} /> Send invitation
          </Button>
          <Button className="!bg-green-500 !text-white flex items-center gap-2 !px-4 !py-2">
            <PlusCircle size={16} /> Follow
          </Button>
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-10">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      <Footer/>
    </div>
  );
};

export default UserDetailPage;
