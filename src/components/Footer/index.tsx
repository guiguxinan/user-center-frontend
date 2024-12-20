import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { PLANET_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = '鬼谷西南出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '渝ICP备2024046991号',
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> ggxn GitHub
            </>
          ),
          href: 'https://github.com/guiguxinan',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
