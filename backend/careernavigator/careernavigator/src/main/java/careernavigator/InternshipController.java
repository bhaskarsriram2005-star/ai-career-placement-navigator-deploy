package careernavigator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/internships")
@CrossOrigin(origins = "*")
public class InternshipController {

    @Autowired
    private InternshipRepository internshipRepository;

    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    @PostMapping
    public Internship addInternship(@RequestBody Internship internship) {
        return internshipRepository.save(internship);
    }

    @DeleteMapping("/{id}")
    public void deleteInternship(@PathVariable Long id) {
        internshipRepository.deleteById(id);
    }
}