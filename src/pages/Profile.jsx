import React, {useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {GithubContext} from '../Context/github/githubContext';
import Loader from '../components/Loader/Loader';
import Repos from '../components/Repos';

const Profile = () => {
	const params = useParams();
	const urlName = params.name;
	const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);

	useEffect(() => {
		getUser(urlName);
		getRepos(urlName);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <Loader />;
	}

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
	} = user;

	return (
		<>
			<Link to='/' className='btn btn-outline-primary mb-2'>
				To the main page
			</Link>
			<div className='card mb-4'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-sm-3 text-center'>
							<img src={avatar_url} alt={name} style={{width: '200px'}} />
							<h2>{name}</h2>
							{location && <p>Location: {location}</p>}
						</div>
						<div className='col'>
							{bio && (
								<>
									<h3>BIO</h3>
									<p>{bio}</p>
								</>
							)}
							<a
								href={html_url}
								className='btn btn-dark mb-3'
								target='_blank'
								rel='noreferrer'
							>
								Open profile
							</a>
							<ul>
								{login && (
									<li>
										<strong>Username: </strong>
										{login}
									</li>
								)}
								{company && (
									<li>
										<strong>Company: </strong>
										{company}
									</li>
								)}
								{blog && (
									<li>
										<strong>Website: </strong>
										{blog}
									</li>
								)}
							</ul>
							<div className='badge bg-primary'>Followers: {followers}</div>
							<div className='badge bg-success'>Following: {following}</div>
							<div className='badge bg-info'>Repositories: {public_repos}</div>
							<div className='badge bg-dark'>Gists: {public_gists}</div>
						</div>
					</div>
				</div>
			</div>
			<Repos repos={repos} />
		</>
	);
};

export default Profile;
