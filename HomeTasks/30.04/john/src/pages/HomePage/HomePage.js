import Intro from './Intro/Intro';
import RecentPosts from './RecentPosts/RecentPosts';
import FeaturedWorks from './FeaturedWorks/FeaturedWorks';

export default function HomePage() {
	return (
		<div>
			<Intro />
			<RecentPosts />
			<FeaturedWorks />
		</div>
	);
}
