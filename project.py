from project_module import project_object, image_object, link_object, challenge_object

p = project_object('crazy2014', 'Crazy 2014')
p.domain = 'http://www.aidansean.com/'
p.path = 'crazy2014'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.folder_name = 'aidansean'
p.github_repo_name = 'crazy2014'
p.mathjax = False
p.tags = 'Frivolous'
p.technologies = 'canvas,JavaScript,HTML'
p.links.append(link_object(p.domain, 'crazy2014/', 'Live page'))
p.introduction = 'When I heard the sad news about flight MH17 I couldn\'t quite understand what was happening.  It seemed like the worst parts of 2014 had come together in a way that nobody could have predicted.  I tried to sum up the situation in this infographic.  This mini project was in fact an excuse to practice some infographic making skills, which I had not used for a long time.'
p.overview = '''This is rendered on the canvas, as usual.'''
