import HeaderLayout from 'components/HeaderLayout';
import BeComeMember from 'components/More/beCome';
import MenuMore from 'components/More/menu';
import TopMore from 'components/More/topMore';
import Layout from 'sections/Layout';

export default function Other() {
	return (
		<Layout>
			<HeaderLayout title="More" />
			<div className="mt-20">
				<TopMore />
				<BeComeMember />
				<MenuMore />
			</div>
		</Layout>
	);
}
