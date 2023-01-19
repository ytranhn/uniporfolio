import HeaderLayout from 'components/HeaderLayout';
import BeComeMember from 'components/More/_beCome';
import MenuMore from 'components/More/_menu';
import TopMore from 'components/More/_topMore';
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
