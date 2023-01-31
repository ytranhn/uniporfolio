import HeaderLayout from 'components/HeaderLayout';
import * as React from 'react';
import Layout from 'sections/Layout';

export interface WebsiteSettingProps {}

export default function WebsiteSetting(props: WebsiteSettingProps) {
	return (
		<Layout>
			<HeaderLayout iconBack title="Website Setting" />
			<div className="mt-20">
				<h3 className=" font-bold text-xl">Watermask</h3>
				<div className="flex items-center w-full mt-4">
					<input
						className=" w-4 h-4 mr-2 cursor-pointer checked:bg-cyan-500 rounded-none"
						type="checkbox"
						id="watermask_profile"
						name="watermask_profile"
						checked
					/>
					<label className="cursor-pointer" htmlFor="watermask_profile">
						Profile
					</label>
				</div>
			</div>
		</Layout>
	);
}
